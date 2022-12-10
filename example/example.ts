@Component({
  selector: 'my-component',
  template: `<p class="my-p">My component works!</p>`,
  styles: [
    `
      .my-p {
        color: orange;
      }
    `,
  ],
})

@Component({
  selector: 'my-component',
  template: `
    <p>my-component works!</p>
    `,
})
class MyComponent
