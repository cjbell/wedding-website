import React from 'react'
import styled from 'styled-components'
import { Section, SectionTitle, SectionBody } from '../components/section'
import usImg from './us.jpg'

const Image = styled.img`
  width: 100%;
`

const MiscPage = () => (
  <Section>
    <SectionTitle>Miscellaneous Information</SectionTitle>

    <SectionBody>
      <h3>Attire</h3>
      <p>
        We kindly request that you wear cocktail attire. We'd suggest not
        wearing heels as the farm might be muddy at that time of year. You may
        also want to consider bringing a jacket, as it might get a bit chilly in
        the evening.
      </p>

      <h3>Gifts</h3>
      <p>
        Gifts are not expected — your attendance is by far the most important
        gift to us. We know that many of you are traveling quite long distances
        and appreciate this much more than any item we could receive. However,
        if you would like to give a gift and are in need of ideas, we have two
        small registries at the below locations:
      </p>

      <ul>
        <li>
          <a
            href="https://www.amazon.com/wedding/chris-bell-dana-cohen-holmdel-october-2018/registry/39ESZLSWGOMUS"
            target="_blank"
          >
            Amazon Registry
          </a>
        </li>
        <li>
          <a href="https://www.zola.com/registry/dana-chris" target="_blank">
            Zola Registry
          </a>
        </li>
      </ul>

      <h3>Contacting Us</h3>

      <ul>
        <li>Email: wedding@cjbell.co</li>
        <li>Chris: +1 917 664 9892 (also available on whatsapp)</li>
        <li>Dana: +1 732 757 6188 (also available on whatsapp)</li>
        <li>Address: 24 Monroe Pl, Apt 8B, Brooklyn, NY, 11201</li>
      </ul>

      <h3>Who are you, anyway?</h3>
      <p>
        We're not big into pictures or soppy photos of us kissing, but here we
        are in Portland, Oregan in July 2017.
      </p>

      <Image src={usImg} />

      <h3>For the nerds</h3>

      <p>
        This site was built using GatsbyJS, React and Styled Components. It's
        typeset in Mrs Eaves. The source of the site is available via MIT
        license{' '}
        <a href="https://github.com/cjbell/wedding-website" target="_blank">
          on Github
        </a>
      </p>

      <p>And no, I don't do freelance projects - CJB</p>
    </SectionBody>
  </Section>
)

export default MiscPage
