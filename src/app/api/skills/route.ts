import { skillsData } from "@/utils/data";
import { NextResponse } from "next/server";



export async function GET() {
	return NextResponse.json(skillsData)
}

export async function POST() {
	
}
// import type { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
// 	message: string;
// };

// export default function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse<ResponseData>
// ) {
//     console.log(req.method)
// 	res.status(200).json({ message: "Hello from Next.js!" });
// }