import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          success: false,
          message: "Supabase credentials not configured",
          error: "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
        },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Test the connection by getting the current time from Supabase
    const { error } = await supabase.rpc('version');
    
    if (error) {
      // If version function doesn't exist, try a simpler test
      const { error: testError } = await supabase.from('_supabase_migrations').select('*').limit(1);
      
      if (testError) {
        return NextResponse.json(
          { 
            success: false, 
            message: "Supabase connection failed", 
            error: testError.message 
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Supabase connection successful",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Supabase connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
