import {
  getDepots,
  getVehicles,
} from "./api/client";

import {
  optimizeSchedule,
} from "./services/scheduler";

async function main() {
  try {
    const depots =
      await getDepots();

    const vehicles =
      await getVehicles();

    console.log(
      "\nDEPOTS"
    );

    console.log(depots);

    console.log(
      "\nVEHICLES"
    );

    console.log(vehicles);

    for (const depot of depots) {
      const result =
        optimizeSchedule(
          vehicles,
          depot.MechanicHours
        );

      console.log(
        `Depot ID: ${depot.ID}`
      );

      console.log(
        `Mechanic Hours: ${depot.MechanicHours}`
      );

      console.log(
        `Maximum Impact: ${result.MaximumImpact}`
      );

      console.log(
        "Selected Tasks:"
      );

      result.SelectedTasks.forEach(
        (task) =>
          console.log(
            task.TaskID
          )
      );
    }
  } catch (error) {
    console.error(error);
  }
}

main();