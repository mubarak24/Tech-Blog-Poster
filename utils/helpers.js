module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // Format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
    capitalize: (text) => {
      // Capitalize the first letter of the string
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  };
  