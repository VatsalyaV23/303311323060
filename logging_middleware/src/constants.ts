export const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

export const VALID_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
  "fatal"
] as const;

export const VALID_PACKAGES = [
  "cache",
  "controller",
  "cron_job",
  "db",
  "domain",
  "handler",
  "repository",
  "route",
  "service"
] as const;