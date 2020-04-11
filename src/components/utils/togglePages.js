export function handlePages([activityState, setActivity], cb, pageToggles = {},) {  // made default for pageToggles so that it didnt crashes
    
    return (e) => {
      const keys = Object.keys(pageToggles);
      const activity = Object.entries(activityState);
      let newActivity = {};
      
      activity.forEach(([page, show]) => {
        if (keys.includes(page)) {
          newActivity[page] = pageToggles[page] === 'toggle' ? !show : pageToggles[page];
        } else {
          newActivity[page] = false;
        }
      })
      // console.log(newActivity)
      if(cb) cb(newActivity)
      setActivity(newActivity);
    }
  };