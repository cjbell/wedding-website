import React from 'react'
import { Section, SectionTitle, SectionBody } from '../components/section'

const AccomodationPage = () => (
  <Section>
    <SectionTitle>
      Accomodation
    </SectionTitle>

    <SectionBody>
      <p>
        As the celebration is going to be hosted outside of New York City, you might want to consider
        staying nearby so that you don't need to travel late in the evening.
      </p>

      <h3>
        Hotel Options
      </h3>

      <p>In the nearby town of Red Bank, N.J. there are three hotel options:</p>

      <ul>
        <li>
          <a href="http://themollypitcher.com/" target="_blank">
            Molly Pitcher Inn
          </a>

          – We have a block of rooms reserved in the Molly Pitcher Inn. Call
          reservations at 732-747-2500 / 1-800-221-1372 and specify that you'd
          like to book a room in the Cohen Bell party.
        </li>
        <li>
          <a href="http://www.theoysterpointhotel.com/" target="_blank">
            Oyster Point
          </a>

          – A more up-market hotel, right next to the Molly Pitcher.
        </li>
        <li>
          <a href="https://www.marriott.com/hotels/travel/ewrrb-courtyard-lincroft-red-bank/" target="_blank">
            Courtyard by Marriott
          </a>

          – A cheaper option, still in Red Bank and accessible by rail. Probably best to book this
          one via Expedia or Booking.com
        </li>
      </ul>

      <p>Additionally, there are a few other options nearby:</p>

      <ul>
        <li>
          <a href="http://www.coltsneckinnhotel.com/en-us" target="_blank">
            Colts Neck Inn Hotel
          </a>
          – Located ~11 mins from the venue by car, Colts Neck Inn is a cheap option for
          accomodation (~$95 per night).
        </li>

        <li>
          <a href="https://goo.gl/maps/7eFeRzsYr1T2" target="_blank">
            Quality Inn, Milddletown
          </a>
          – Located ~12 mins from the venue by car, the Quality Inn is another cheap-ish option
          around the wedding venue. Milddletown is also served by Rail from Penn Station NYC.
        </li>
      </ul>
    </SectionBody>
  </Section>
)

export default AccomodationPage

