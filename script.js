document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dob = new Date(document.getElementById('dob').value);      // output: Tue Apr 08 2003 02:00:00 GMT+0200 (Eastern European Standard Time)

   
    const today = new Date();       // output: Wed Jul 03 2024 21:56:43 GMT+0300 (Eastern European Summer Time)
    
    let age = today.getFullYear() - dob.getFullYear();         // 21 age
    






    const m = today.getMonth() - dob.getMonth();  // output may be nagative or positive or zero
    console.log(m)

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        // nagative month or (zero month && nagative day)
        age--;
        console.log(age)
    }

    console.log(age)
    
    document.getElementById('result').textContent = `Your age is ${age} years.`;
});
























