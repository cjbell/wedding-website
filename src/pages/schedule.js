import React from 'react'
import styled from 'styled-components'
import { Section, SectionTitle, SectionBody } from '../components/section'
import theme from '../theme'

const Location = styled.h4`
  font-family: ${theme.font.tertiary};
  letter-spacing: 1.5px;
  color: #949494;
`

const SchedulePage = () => (
  <Section>
    <SectionTitle>Schedule</SectionTitle>

    <SectionBody>
      <h3>Friday, October 19th 2018</h3>
      <Location>Red Bank, NJ, USA</Location>
      <p>
        <strong>6pm - 11pm</strong> – Drinks to warm things up for those in town early.
      </p>
      <h3>Saturday, October 20th 2018</h3>
      <Location>Bayonet Farm, Holmdel, NJ, USA</Location>
      <p>
        <strong>5pm - 10pm</strong> – We'll be kicking things off with cocktails
        before saying a few words, and then sitting down for a buffet. After
        dinner we'll be having some non-traditional pies and dancing off all of
        that food in a hundred year old barn.
      </p>
      <Location>Red Bank, NJ, USA</Location>
      <p>
        <strong>11pm - Late</strong> – After party for those who aren't already
        partied out (location TBD).
      </p>
      <h3>Sunday, October 21st 2018</h3>
      <Location>61 Local, Brooklyn, NY, USA</Location>
      <p>
        <strong>7pm - Late</strong> – Drinks in one of our favo(u)rite
        neighbo(u)rhood spots.
      </p>
      ~~~~<br />
      <Location>
        If we're lucky enough to have you in town for the rest of the week, and
        you haven't yet had enough of us, we'll be planning some further events.
        Please keep us posted of your whereabouts.
      </Location>
    </SectionBody>
  </Section>
)

export default SchedulePage
