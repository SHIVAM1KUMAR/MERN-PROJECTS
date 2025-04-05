const api = "http://localhost:5000/api/students";

document.getElementById("addStudentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    rollNumber: parseInt(document.getElementById("rollNumber").value),
    grades: {
      hindi: parseFloat(document.getElementById("hindi").value),
      english: parseFloat(document.getElementById("english").value),
      math: parseFloat(document.getElementById("math").value),
      science: parseFloat(document.getElementById("science").value),
      sst: parseFloat(document.getElementById("sst").value)
    }
  };

  const res = await fetch(`${api}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });

  const data = await res.json();
  alert(`${student.name} added! Average: ${data.average}, Result: ${data.result}`);
  e.target.reset();
});

async function searchStudent() {
  const name = document.getElementById("searchName").value;
  const res = await fetch(`${api}/result/${name}`);
  const resultDiv = document.getElementById("searchResult");

  if (res.ok) {
    const data = await res.json();

    // Safety check if grades exist
    if (!data.grades) {
      resultDiv.innerText = "Student data incomplete.";
      return;
    }

    resultDiv.innerHTML = `
      <strong>Name:</strong> ${data.name}<br/>
      <strong>Roll Number:</strong> ${data.rollNumber}<br/>
      <strong>Subject Marks:</strong><br/>
      Hindi: ${data.grades.hindi}<br/>
      English: ${data.grades.english}<br/>
      Math: ${data.grades.math}<br/>
      Science: ${data.grades.science}<br/>
      SST: ${data.grades.sst}<br/>
      <strong>Average:</strong> ${data.average}<br/>
      <strong>Result:</strong> ${data.result}
    `;
  } else {
    resultDiv.innerText = "Student not found.";
  }
}

async function removeStudent() {
  const roll = document.getElementById("removeRoll").value;
  const res = await fetch(`${api}/remove/${roll}`, { method: "DELETE" });
  const data = await res.json();
  document.getElementById("removeResult").innerText = data.message;
}

async function getTopper() {
  const res = await fetch(`${api}/highest`);
  const data = await res.json();

  if (res.ok) {
    document.getElementById("topperResult").innerText = `Topper: ${data.name} (Avg: ${data.average})`;
  } else {
    document.getElementById("topperResult").innerText = data.message;
  }
}
