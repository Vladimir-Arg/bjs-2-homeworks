function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      console.log("массивы разные по длине");
      return false;
    } else if (arr1.every((item, index) => item === arr2[index])) {
      console.log("массивы одинаковые");
      return true;
    } else {
      console.log("у массивов разное содержимое");
      return false;
    }
}

function getUsersNamesInAgeRange(users, gender) {
    const usersFilter = users.filter((user) => user.gender === gender);
    if (usersFilter.length === 0) return 0;
    const result =
      usersFilter.reduce((acc, user) => acc + user.age, 0) /
      users.filter((user) => user.gender === gender).length;
    return result;
}