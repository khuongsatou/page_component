class Subject {
    constructor() {
        this.observers = []; // Danh sách các observers
    }

    // Thêm một observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Loại bỏ một observer
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Thông báo cho tất cả các observers
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name, elementId) {
        this.name = name;
        this.elementId = elementId;
    }

    // Phương thức update sẽ được gọi khi subject thông báo
    update(data) {
        const notificationList = document.getElementById('notificationList');
        const listItem = document.createElement('li');
        listItem.classList.add('notification-item');
        listItem.textContent = `${this.name} nhận được thông báo: ${data}`;
        notificationList.appendChild(listItem);

        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: `${this.name} nhận được thông báo: ${data}`,
            showConfirmButton: false,
            timer: 3000,
            toast: true,
            customClass: {
                popup: 'slide-in-left'
            }
        });
    }
}

// Tạo đối tượng Subject
const subject = new Subject();

// Tạo các observers
const observer1 = new Observer('Observer 1', 'observer1');
const observer2 = new Observer('Observer 2', 'observer2');

// Thêm observers vào subject
subject.addObserver(observer1);
subject.addObserver(observer2);

// Sự kiện khi nhấn nút thông báo
document.getElementById('notifyBtn').addEventListener('click', () => {
    const message = 'Cập nhật mới!';
    subject.notify(message);
});

// Sự kiện khi thay đổi checkbox
document.getElementById('observer1').addEventListener('change', (event) => {
    if (event.target.checked) {
        subject.addObserver(observer1);
    } else {
        subject.removeObserver(observer1);
    }
});

document.getElementById('observer2').addEventListener('change', (event) => {
    if (event.target.checked) {
        subject.addObserver(observer2);
    } else {
        subject.removeObserver(observer2);
    }
});
