// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const  mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENGRID_API_KEY)

export default (req,res)=>{
  const body = JSON.parse(req.body)
  const data = {
    to:`${body.email}`,
    from:'developer@dayanarango.com',
    subject: 'New web from Saving!',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<h1 style="color:#D7623F">¡THE PLANET WILL THANK YOU! 🐼</h1>
    <br>
    <p style="font-size: 30px" > Your goal for this week is: ${body.option} </p>
    <img src="http://wikifaunia.com/wp-content/uploads/2013/01/Oso-polar.jpg"/>
    <br>
    <span>Shipped from: Saving</span>
    `,
  }
  mail
  .send(data)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

  mail.send(data)
}