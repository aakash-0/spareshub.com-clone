import React from 'react'
import "./home.css"

function Homepage() {
  return (
    <div className='main-container'>
        <div className='banner'>
          <img src="https://spareshub.com/pub/media/wysiwyg/xslider-1_1_.jpg.pagespeed.ic.CbiR6hPmV9.webp"/>
        </div>
        <div className='brands-icons'>
          <h2>
            <strong>BROWSE BY BRANDS</strong>
          </h2>
            <div className='brands-row'>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xmarutisuzuki_1.png.pagespeed.ic.9zcpkCRaUE.webp'></img>
              </div>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xhundai_1.png.pagespeed.ic.BdhzVhklJm.webp'></img>
              </div>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xmahindra_1.png.pagespeed.ic.H0Q9fj69-h.webp'></img>
              </div>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xtata_2.png.pagespeed.ic.nCbNq88VZS.webp'></img>
              </div>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xtoyota_1.png.pagespeed.ic.IxoTAzW7q5.webp'></img>
              </div>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xhonda_2.png.pagespeed.ic.RqKvPjjWvt.webp'></img>
              </div>
            </div>
            <div className='brands-row'>
            <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xrenault_1.png.pagespeed.ic.5-rdnKPUGj.webp'></img>
              </div>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xnissan_2.png.pagespeed.ic.9Lv9njX03Y.webp'></img>
              </div>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xford_2.png.pagespeed.ic.yRoMho8eeQ.webp'></img>
              </div>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xvolkswagen_1.png.pagespeed.ic.xh75aPdEE-.webp'></img>
              </div>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xskoda_1.png.pagespeed.ic.GxIn_f-FMI.webp'></img>
              </div>
              <div>
                <img src='https://spareshub.com/pub/media/wysiwyg/xchevrolet_1.png.pagespeed.ic.iMnoXvlNrz.webp'></img>
              </div>
            </div>
          
        </div>
        <div className='brands-icons'>
        <h2>
            <strong>BEST CAR SPARE PARTS ONLINE STORE IN INDIA</strong>
        </h2>
        <div className='b2'>
          <div>
            <img src='data:image/webp;base64,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'></img>
          </div>
          <div>
            <img src='https://spareshub.com/pub/media/wysiwyg/xstore_desc2.png.pagespeed.ic.qCLek5dY0b.webp'></img>
          </div>
          <div>
            <img src='https://spareshub.com/pub/media/wysiwyg/xstore_desc3.png.pagespeed.ic.XC8OwhuOg9.webp'></img>
          </div>
        </div>
        <div className='b2'>
          <div>
            <img src='https://spareshub.com/pub/media/wysiwyg/xstore_desc4.png.pagespeed.ic.yv3DfZWc1W.webp'></img>
          </div>
          <div>
            <img src='https://spareshub.com/pub/media/wysiwyg/xstore_desc5.png.pagespeed.ic.8b_hPnA0Rb.webp'></img>
          </div>
          <div>
            <img src='https://spareshub.com/pub/media/wysiwyg/xstore_desc6.png.pagespeed.ic.eidaIC4hNY.webp'></img>
          </div>
        </div>
        </div>
        <div className='testimonial-section'>
            <h2>TESTIMONIALS</h2>
            <div className='b2'>
              <div className='testimonial-card'>
                <div className='testimonial-image'>
                  <img src="https://spareshub.com/pub/media/wysiwyg/xtest1.jpg.pagespeed.ic.T3x9fg9RM3.webp"></img>
                </div>
                <div className='testimonial-details'>
                  <div>Meenakshi Shinde</div>
                  <div className='testimonial-other-docs'>I purchased a clutch set for my Volkswagen Vento from your website. I was happy with the parts and the service. Thanks SparesHub.</div>
                </div>


              </div>
              <div className='testimonial-card'>
              <div className='testimonial-image'>
                  <img src="https://spareshub.com/pub/media/wysiwyg/xtest2.jpg.pagespeed.ic.vNI_ICt75i.webp"></img>
                </div>
                <div className='testimonial-details'>
                  <div>Rohan Yadav</div>
                  <div className='testimonial-other-docs'>"Got my order of brake pads delivered today. First I was not sure if I should buy parts online, but my experience has been good"</div>
                </div>

              </div>
              <div className='testimonial-card'>
              <div className='testimonial-image'>
                  <img src="https://spareshub.com/pub/media/wysiwyg/xtest3.jpg.pagespeed.ic.M9qbtFqueD.webp"></img>
                </div>
                <div className='testimonial-details'>
                  <div>Dilip Londhe</div>
                  <div className='testimonial-other-docs'>Kudos to your website. I finally found the brake pads and sensors for my BMW 3 Series 2010 at a great price.</div>
                </div>
                
              </div>

            </div>
           
        </div>
    </div>
  )
}

export default Homepage