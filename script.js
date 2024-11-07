function calculateBMI() {
    // Ambil nilai dari input form
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    // Validasi input
    if (!gender || !age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
      alert('Please fill out all fields correctly.');
      return;
    }
  
    // Hitung BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
    // Tampilkan hasil
    let resultText = `Your BMI is ${bmi}.`;
  
    // Menambahkan kategori berdasarkan nilai BMI
    if (bmi < 18.5) {
      resultText += " Category: Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultText += " Category: Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultText += " Category: Overweight";
    } else {
      resultText += " Category: Obesity";
    }
  
    document.getElementById('result').textContent = resultText;
  }
  