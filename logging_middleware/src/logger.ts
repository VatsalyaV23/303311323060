import axios from "axios";
import { LOG_API } from "./constants";

type Level =
  | "debug"
  | "info"
  | "warn"
  | "error"
  | "fatal";

type BackendPackage =
  | "cache"
  | "controller"
  | "cron_job"
  | "db"
  | "domain"
  | "handler"
  | "repository"
  | "route"
  | "service";

export async function Log(
  level: Level,
  pkg: BackendPackage,
  message: string
) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack: "backend",
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2YXRzYWx5YS52ZXJtYTIwMjNAc3NpcG10LmNvbSIsImV4cCI6MTc4MDg5NjMzOCwiaWF0IjoxNzgwODk1NDM4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmNjNjVlNjMtN2MxMS00MWIyLWFkY2ItMmE4Y2M1NTc0NDA0IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmF0c2FseWEgdmVybWEiLCJzdWIiOiJiM2ExNjBlYi0wYzlkLTQyZDAtYWRlYy04YjQ1YTg3NDhjNDMifSwiZW1haWwiOiJ2YXRzYWx5YS52ZXJtYTIwMjNAc3NpcG10LmNvbSIsIm5hbWUiOiJ2YXRzYWx5YSB2ZXJtYSIsInJvbGxObyI6IjMwMzMxMTMyMzA2MCIsImFjY2Vzc0NvZGUiOiJhR0JUSloiLCJjbGllbnRJRCI6ImIzYTE2MGViLTBjOWQtNDJkMC1hZGVjLThiNDVhODc0OGM0MyIsImNsaWVudFNlY3JldCI6IktNRnR2bXVEbXlnYWZDVG0ifQ.A4hDCaHqHhJ1CMPApiwtRc_vkqnQZ1cKZP8s9Spetvc`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error: any) {
    console.error(
      "Logging Error:",
      error.response?.data || error.message
    );
  }
}