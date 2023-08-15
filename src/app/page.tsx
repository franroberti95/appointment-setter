import Image from 'next/image'
import styles from './page.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <Image src={'/imgs/logotipo.png'} alt={'logo'} width={300} height={55.6}/>
      </div>

      <div className={styles.center}>
        <h2 >
          De $200 a $2000usd en un mes con solo un APPOINMENT SETTER.
        </h2>

          <div className={styles.videoContainer}>

              <iframe width="560" height="315" src="https://www.youtube.com/embed/Jojgmcx5Q_c" title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>
          </div>

        <p>
          Escalá tu negocio un un X3 en solo tres meses con UN SOLO APPOINTMENT SETTER. Acá te contamos cómo escalamos un X10 en nuestro negocio sin invertir un solo centavo y sin pagar un solo sueldo, solamente con un Appointment Setter en nuestra cuenta.
        </p>

          <div className={styles.testimonials}>

              {
                  [
                      '/testimonios/1.PNG',
                      '/testimonios/2.PNG',
                      '/testimonios/3.PNG',
                      '/testimonios/4.PNG',
                      '/testimonios/5.PNG',
                      '/testimonios/6.PNG',
                      '/testimonios/7.PNG',
                      '/testimonios/8.PNG',
                      '/testimonios/9.PNG',
                      '/testimonios/10.jpeg',
                  ]
                      .map( i =>
                          <Image
                              key={i}
                              src={i}
                              alt={i}
                              width={300}
                              height={600}
                          />
                      )
              }
          </div>


          <div className="calendly-inline-widget" data-url="https://calendly.com/starmediaworkteam/30min" style={{minWidth:320, height:700}}/>
          <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>


      </div>

    </main>
  )
}
