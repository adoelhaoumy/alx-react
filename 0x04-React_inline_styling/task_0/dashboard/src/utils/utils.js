<<<<<<< HEAD
export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => (isIndex ? "Holberton School" : "Holberton School main dashboard");

export const getLatestNotification = () => "<strong>Urgent Requirement</strong> - complete by EOD";
=======
t getFullYear = () => {
  let current_year = new Date().getFullYear();
  return current_year;
}

const getFooterCopy = (isIndex) => {
  if (isIndex === true) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

module.exports = {
  getFooterCopy,
  getFullYear,
  getLatestNotification
};
>>>>>>> c79235b532e20913fbb7b173a242caaa514aa5e4
