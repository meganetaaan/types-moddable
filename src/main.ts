import Timeline from 'piu/Timeline'
import { Application, Skin, Content, Label } from 'piu'

export default new Application(null, {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  skin: new Skin({
    fill: '#FAFAFA',
  }),
  contents: [
    new Content(null, {
      top: 20,
      left: 20,
      width: 50,
      height: 50,
      skin: new Skin({
        fill: 'red',
      }),
    }),
    new Label(null, {
      top: 40,
      left: 20,
      string: 'hoge',
    }),
  ],
})
