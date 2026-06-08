import { Vehicle } from "../types";

export function optimizeSchedule(
  tasks: Vehicle[],
  mechanicHours: number
) {
  const n = tasks.length;

  const dp = Array.from(
    { length: n + 1 },
    () =>
      Array(mechanicHours + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    const current = tasks[i - 1];

    for (
      let h = 0;
      h <= mechanicHours;
      h++
    ) {
      if (current.Duration <= h) {
        dp[i][h] = Math.max(
          current.Impact +
            dp[i - 1][
              h - current.Duration
            ],
          dp[i - 1][h]
        );
      } else {
        dp[i][h] =
          dp[i - 1][h];
      }
    }
  }

  let remainingHours =
    mechanicHours;

  const selectedTasks: Vehicle[] =
    [];

  for (let i = n; i > 0; i--) {
    if (
      dp[i][remainingHours] !==
      dp[i - 1][remainingHours]
    ) {
      selectedTasks.push(
        tasks[i - 1]
      );

      remainingHours -=
        tasks[i - 1].Duration;
    }
  }

  return {
    MaximumImpact:
      dp[n][mechanicHours],

    SelectedTasks:
      selectedTasks.reverse(),
  };
}