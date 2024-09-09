function ageCalculater() {
    const input = document.getElementById('input-field').value;
    const birthDate = new Date(input);
    const currentDate = new Date();
  
    if (input === "") {
      document.querySelector('.para').textContent = "Please select a date.";
      return;
    }
  
    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);
  
    const years = ageDate.getUTCFullYear() - 1970; 
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
  
    document.querySelector('.para').innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  