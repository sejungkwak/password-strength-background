# Password Strength Background

![screen recording](https://media.giphy.com/media/KzcTPH6XnG24Kv0Lbz/giphy.gif)

#### project notes

1. HTML

- image
- form
- h: Image Password Strength
- p: Change the password to see the effect
- label: Email / Password
- Submit

2. CSS

- background image blur

3. JavaScript

- change blurriness as the password lengthen

* Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML

- wrapped with div, not form

2. CSS

- tailwind framework

3. JavaScript

```
password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`
})
```
