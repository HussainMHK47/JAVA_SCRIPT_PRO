const fields = {
  name: {
    el: document.getElementById('name'),
    group: document.getElementById('g-name'),
    err: document.getElementById('e-name'),
    validate(v) {
      v = v.trim();
      if (!v) return 'Name is required';
      if (v.length < 3) return 'At least 3 characters';
      if (!/^[A-Za-z\s.'-]+$/.test(v)) return 'Letters, spaces and dots only';
      return '';
    }
  },
  age: {
    el: document.getElementById('age'),
    group: document.getElementById('g-age'),
    err: document.getElementById('e-age'),
    validate(v) {
      if (!v) return 'Age is required';
      const n = +v;
      if (n < 16) return 'Must be 16 or older';
      if (n > 70) return 'Max age is 70';
      return '';
    }
  },
  gender: {
    el: document.getElementById('gender'),
    group: document.getElementById('g-gender'),
    err: document.getElementById('e-gender'),
    validate(v) {
      return v ? '' : 'Please select gender';
    }
  },
  phone: {
    el: document.getElementById('phone'),
    group: document.getElementById('g-phone'),
    err: document.getElementById('e-phone'),
    validate(v) {
      if (!v) return 'Phone is required';
      if (!/^\d{10}$/.test(v)) return 'Enter a valid 10-digit number';
      return '';
    }
  },
  email: {
    el: document.getElementById('email'),
    group: document.getElementById('g-email'),
    err: document.getElementById('e-email'),
    validate(v) {
      if (!v) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Enter a valid email';
      return '';
    }
  },
  plan: {
    el: document.getElementById('plan'),
    group: document.getElementById('g-plan'),
    err: document.getElementById('e-plan'),
    validate(v) {
      return v ? '' : 'Please choose a plan';
    }
  },
  address: {
    el: document.getElementById('address'),
    group: document.getElementById('g-address'),
    err: document.getElementById('e-address'),
    validate(v) {
      v = v.trim();
      if (!v) return 'Address is required';
      if (v.length < 10) return 'At least 10 characters';
      return '';
    }
  }
};

const bar = document.getElementById('bar');

function check(key, showOk = true) {
  const f = fields[key];
  const msg = f.validate(f.el.value);
  f.group.classList.remove('error', 'success');
  if (msg) {
    f.group.classList.add('error');
    f.err.textContent = msg;
  } else if (showOk) {
    f.group.classList.add('success');
  }
  updateBar();
  return !msg;
}

function updateBar() {
  const total = Object.keys(fields).length;
  const done = Object.keys(fields).filter(k => {
    const f = fields[k];
    return !f.validate(f.el.value) && f.el.value.trim() !== '';
  }).length;
  bar.style.width = (done / total * 100) + '%';
}

Object.keys(fields).forEach(key => {
  const f = fields[key];
  f.el.addEventListener('input', () => check(key));
  f.el.addEventListener('blur', () => check(key));
});

document.getElementById('gymForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let allValid = true;
  Object.keys(fields).forEach(k => {
    if (!check(k)) allValid = false;
  });
  if (allValid) {
    const name = fields.name.el.value.trim();
    alert('Welcome, ' + name + '! Your admission is confirmed.');
    this.reset();
    Object.keys(fields).forEach(k => fields[k].group.classList.remove('success', 'error'));
    bar.style.width = '0%';
  }
});