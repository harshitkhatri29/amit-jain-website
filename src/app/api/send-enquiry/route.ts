import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            fullName,
            phone,
            email,
            treatment,
            preferredDate,
            preferredTime,
            message,
        } = body;

        if (!fullName || !phone || !email || !treatment || !preferredDate || !preferredTime) {
            return NextResponse.json(
                { error: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        const phoneRegex = /^[6-9][0-9]{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!phoneRegex.test(phone)) {
            return NextResponse.json(
                { error: "Please enter a valid 10-digit Indian mobile number." },
                { status: 400 }
            );
        }

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Dental Website <onboarding@resend.dev>",
            to: ["harshitkhatri2006@gmail.com"],
            subject: `New Dental Enquiry - ${fullName}`,
            html: `
        <h2>New Dental Enquiry</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Treatment / Reason:</strong> ${treatment}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime || "Not specified"}</p>
        <p><strong>Additional Message:</strong> ${message || "No additional message"
                }</p>
      `,
        });

        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            id: data?.id,
        });
    } catch (error) {
        console.error("Enquiry error:", error);

        return NextResponse.json(
            { error: "Something went wrong while sending the enquiry." },
            { status: 500 }
        );
    }
}