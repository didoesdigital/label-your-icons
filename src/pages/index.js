import React from "react"

import LYIGoogleSheets from "../images/lyi-in-the-wild/Google Sheets.png"
import LYIVSCO from "../images/lyi-in-the-wild/VSCO.png"
import LYIMysteryMeat from "../images/lyi-in-the-wild/Viget Mystery Meat Links.png"
import LYISlack from "../images/lyi-in-the-wild/Slack toolbar icons without labels.png"
import LYIGmail from "../images/lyi-in-the-wild/Gmail email actions.png"
import AvatarJack from "../images/avatars/penguin-161356_640.png"
import AvatarDi from "../images/avatars/di.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Label Your Icons" />
    <div className="landing-page-section">
      <div className="mx-auto mw-1024 p3">
        <p className="lede">There is a scourge taking over digital design: icons <span className="nowrap">without labels</span>.</p>
        <p className="lede">You can help put an end to this deceptive practice.</p>
        <p>Add a label to your icon. Add labels to <strong>all</strong> your icons.</p>
      </div>
    </div>

    <div className="landing-page-section bg-porcelain">
      <div className="mx-auto mw-1024 p3">
      <h2>Icons without labels</h2>
        <div className="figure">
          <img src={LYIGoogleSheets} alt="Google Sheets toolbar showing 32 icons without labels. " className="figure__image media-object__media" style={{ maxWidth: `100%` }} />
          <p className="figure__caption">Google Sheets has a toolbar containing 25 icons without labels with a submenu containing 7 more icons without labels.</p>
        </div>
      </div>
    </div>

    <div className="landing-page-section">
      <div className="mx-auto mw-1024 p3">
        <div className="media-object">
          <div className="media-object__media">
            <img src={LYIVSCO} alt="VSCO app showing 6 icons without labels in the navbar and 1 icon without a label in the main area. " className="figure__image" style={{ maxWidth: `100%` }} />
            <p className="figure__caption">The VSCO app navbar has 6 icons and no labels.</p>
          </div>
          <div>
            <h3>Navbars</h3>
            <p>Navbars are a common source of icons without labels. <a href="https://www.freecodecamp.org/news/material-design-and-the-mystery-meat-navigation-problem-65425fb5b52e/">Learn more about navbar icons without labels</a>.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="landing-page-section bg-porcelain">
      <div className="mx-auto mw-1024 p3">
        <div className="media-object">
          <div className="media-object__media">
            <img src={LYISlack} alt="Slack’s app with 3 icons without labels, search, and 3 more icons without labels. " className="figure__image" style={{ maxWidth: `100%` }} />
            <p className="figure__caption">Slack uses a search bar to separate its 6 icons without labels.</p>
          </div>
          <div>
            <h3>Toolbars</h3>
            <p>Toolbars are rife with icons. They rarely have labels. <a href="https://uxmyths.com/post/715009009/myth-icons-enhance-usability">Learn more about the myth of icon usability</a>.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="landing-page-section">
      <div className="mx-auto mw-1024 p3">
        <div className="media-object">
          <div className="media-object__media">
            <img src={LYIGmail} alt="Gmail’s email actions." className="figure__image" style={{ maxWidth: `100%` }} />
            <p className="figure__caption">Gmail uses icons without labels for actions you can take on an email only when you hover over it.</p>
          </div>
          <div>
            <h3>Actions</h3>
            <p>You can often see icons without labels for inline editing actions. <a href="https://www.nngroup.com/articles/icon-usability/">Learn more about designing for icon&nbsp;usability</a>.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="landing-page-section bg-porcelain">
      <div className="mx-auto mw-1024 p3">
        <div className="media-object">
          <div className="media-object__media">
            <img src={LYIMysteryMeat} alt="A paragraph containing 4 linked words side by side. " className="figure__image media-object__media" style={{ maxWidth: `100%` }} />
            <p className="figure__caption">This paragraph has 4 links in a row to non-descriptive places like the word “who”.</p>
          </div>
          <div>
            <h3>Mystery meat navigation</h3>
            <p>“<strong>Mystery meat navigation</strong>” describes links that do not have a clear destination. You need to hover over the link to uncover its destination or follow it with wild abandon. Like mystery meat—processed meats with unidentified sources—mystery meat navigation is clear to the creator but not to the consumer.</p>
            <p>Icons are not the only kind of mystery meat navigation. Poor link text also confuses readers.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="landing-page-section">
      <div className="mx-auto mw-1024 p3">
        <h2>What designers and developers say</h2>
        <div className="media-object" style={{ marginTop: `4.35rem`, marginBottom: `4.35rem` }}>
          <img src={AvatarDi} alt="Di. " className="media-object__media" style={{ maxWidth: `180px`}} />
          <div>
            <blockquote className="quote">
              <p>The symptoms of mystery meat navigation include <strong>decreased click confidence</strong>, <strong>wayfinding challenges</strong>, <strong>longer task completion times</strong>, and <strong>abandonment</strong>.</p>
              <p>You have to give icons alt text anyway. You may as well give them labels.</p>
            </blockquote>
            <p>—Diana MacDonald, <a href="https://didoesdigital.com/project/book-practical-ui-patterns-for-design-systems/">Practical UI Patterns for Design Systems</a></p>
          </div>
        </div>
        <div className="media-object" style={{ marginTop: `4.35rem`, marginBottom: `4.35rem` }}>
          <img src={AvatarJack} alt="Jack’s avatar. " className="media-object__media" style={{ maxWidth: `180px`, paddingLeft: `8px` }} />
          <div>
            <blockquote className="quote">
              <p>Interacting with modern software involves poring over <strong>inscrutable hieroglyphs</strong> trying to find the one button that might do what you want. This button may be <strong>buried in a settings menu</strong> (which "cog" button is it?), or stuffed into a drawer behind a hamburger button that looks like <strong>nothing</strong> at all. And you won't find out if it's the right thing until you try.</p>
            </blockquote>
            <p>—Jack, developer and speaker</p>
          </div>
        </div>
      </div>
    </div>

    <div className="landing-page-section bg-daintree reversed">
      <div className="mx-auto mw-1024 p3">
        <h2 className="tiny-rules" style={{ textAlign: `center` }}>What can you do?</h2>
      </div>
    </div>

    <div className="landing-page-section">
      <div className="mx-auto mw-1024 p3">
        <h2>Use meaningful icons</h2>
        <p className="lede">Icons establish visual language and create visual interest.</p>
        <p>Use icons with physical resemblance to signified objects. Reserve outline icons for actionable icon buttons.</p>
      </div>
    </div>

    <div className="landing-page-section bg-porcelain">
      <div className="mx-auto mw-1024 p3">
        <h2>Write informative labels</h2>
        <p className="lede">A label is a classifying name that adds clarity and aids navigation.</p>
        <p>Write labels that identify objects. Use plain language. Test the readability score of your labels. Use consistent naming conventions. Use the same label for an icon every time.</p>
      </div>
    </div>

    <div className="landing-page-section">
      <div className="mx-auto mw-1024 p3">
        <h2>Label your icons</h2>
        <p className="lede">When you add a text label to an icon, you immediately make the interface more understandable and less bewildering to new users.</p>
        <p>If you really must have an icon button without a label, show a tooltip on hover and focus (for people using touch devices, keyboards, or screen readers).</p>
      </div>
    </div>

    <div className="landing-page-section bg-porcelain">
      <div className="mx-auto mw-1024 p3">
        <h2>Conduct usability tests</h2>
        <p className="lede">Only use icons without labels when you have rigorous usability testing to back you up.</p>
        <p><a href="https://conversionxl.com/blog/icon-usability-testing/">Learn more about conducting usability tests on icons</a>.</p>
      </div>
    </div>

    <div className="landing-page-section">
      <div className="mx-auto mw-1024 p3">
        <h2>Make the world a clearer place.</h2>
        <p className="lede">You can make the web a more accessible, inclusive space.</p>
        <p>Share the love. When you add a label, <a href="https://twitter.com/intent/tweet?text=I%20give%20my%20icons%20labels%20and%20you%20can%20too!&hashtags=LabelYourIcons">tell the Twitter community</a> and spread the good vibes.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
