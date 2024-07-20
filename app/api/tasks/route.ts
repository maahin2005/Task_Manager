import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        


    } catch (error) {
        console.error("ERROR CREATING TASK: ", (error as Error).message, error);

        return NextResponse.json({ error: "Error creating task" }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        
        

    } catch (error) {
        console.error("ERROR GETTING TASK: ", (error as Error).message, error);

        return NextResponse.json({ error: "Error creating task" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        
        

    } catch (error) {
        console.error("ERROR UPDATING TASK: ", (error as Error).message, error);

        return NextResponse.json({ error: "Error creating task" }, { status: 500 });
    }
}


export async function DELETE(req: Request) {
    try {
        
        

    } catch (error) {
        console.error("ERROR DELETING TASK: ", (error as Error).message, error);

        return NextResponse.json({ error: "Error creating task" }, { status: 500 });
    }
}