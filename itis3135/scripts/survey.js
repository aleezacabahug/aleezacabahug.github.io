// Define all functions first
function addCourseField() {
    const coursesContainer = document.getElementById('coursescontainer');
    const courseField = document.createElement('div');
    courseField.classList.add('course-entry');

    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.placeholder = 'Enter course name';
    courseField.appendChild(courseInput);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        coursesContainer.removeChild(courseField);
    });
    courseField.appendChild(deleteButton);

    coursesContainer.appendChild(courseField);
}

function displayFormData() {
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const imageCaption = document.getElementById('imagecaption').value;
    const personalBackground = document.getElementById('personalbackground').value;
    const professionalBackground = document.getElementById('professionalbackground').value;
    const academicBackground = document.getElementById('academicbackground').value;
    const webDevBackground = document.getElementById('webdevbackground').value;
    const platform = document.getElementById('platform').value;
    const funnyThing = document.getElementById('funnything').value;
    const anythingElse = document.getElementById('anythingelse').value;

    const courses = Array.from(document.querySelectorAll('.course-entry input')).map((input) => input.value);

    let outputHTML = `
        <h2>Your Introduction Page</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mascot:</strong> ${mascot}</p>
        <p><strong>Image Caption:</strong> ${imageCaption}</p>
        <p><strong>Personal Background:</strong> ${personalBackground}</p>
        <p><strong>Professional Background:</strong> ${professionalBackground}</p>
        <p><strong>Academic Background:</strong> ${academicBackground}</p>
        <p><strong>Background in Web Development:</strong> ${webDevBackground}</p>
        <p><strong>Primary Computer Platform:</strong> ${platform}</p>
        <p><strong>Courses:</strong> ${courses.join(', ')}</p>
        <p><strong>Funny Thing:</strong> ${funnyThing}</p>
        <p><strong>Anything Else:</strong> ${anythingElse}</p>
        <button onclick="resetForm()">Reset</button>
    `;

    document.getElementById('output').innerHTML = outputHTML;
    document.getElementById('introform').style.display = 'none';
}

function resetForm() {
    document.getElementById('introform').style.display = 'block';
    document.getElementById('output').innerHTML = '';
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('introform').addEventListener('submit', function(event) {
        event.preventDefault(); 
        displayFormData();
    });

    document.getElementById('introform').addEventListener('reset', function() {
        resetForm();
    });

    document.getElementById('addcoursebutton').addEventListener('click', addCourseField);
});