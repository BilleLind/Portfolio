

export function getGreeting() {
  let currentTime: number = new Date().getHours();
  if (currentTime <= 6) {
    return 'Hello Night Owl!, ';
  } else if (currentTime > 6 && currentTime < 12) {
    return 'Good Morning, ';
  } else if (currentTime >= 12 && currentTime < 18) {
    return 'Good Afternoon, ';
  } else if (currentTime >= 18 && currentTime < 24) {
    return 'Good Evening, ';
  }
}

