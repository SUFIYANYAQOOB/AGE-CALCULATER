
function calculateAge() {
    
    let dob = new Date(document.getElementById('dob').value);
    let today = new Date();
    
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += previousMonth;
        months--;
    }
    document.getElementById('OUTPUT').textContent = 
        `Your age is ${years} years: ${months} months: and ${days} days:`;
}