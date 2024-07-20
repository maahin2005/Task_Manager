import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        // Your code that might throw an error
    } catch (error) {
        console.error("ERROR CREATING TASK: ", (error as Error).message, error);

        return NextResponse.json({ error: "Error creating task" }, { status: 500 });
    }
}
