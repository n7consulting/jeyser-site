import React from 'react';
import HomeList from './HomeList';

const data = [
  '<strong>Not commercial.</strong> We are not looking for your money. Book a server, pay for it monthly and that\'s all. Use the full potential of your tools, don\'t be limited by prices',
  '<strong>Updated and maintained.</strong> Jeyser is used on a daily basis by several junior-entreprise. Bugs are quickly fixed once you signaled them.',
  '<strong>Relies on professionnal technologies.</strong> Such as Docker and Symfony for a better security.',
  '<strong>Keep the control of your data.</strong> Everything is hosted on your server, your control over your data is complete. Use Jeyser as a data source for all your creative projects',
  '<strong>Open to contributions.</strong> Something is missing on Jeyser or you have a tremendeous idea ? Share it with us on Github and we\'ll make Jeyser a better product for everyone',
  '<strong>Free forever.</strong> Our licence ensures you that Jeyser will remain open-source forever.',
];

const Giants = () => (
  <section className="home__part home__giants">
    <div className="container giants__container">
      <h1 className="giants__title">
        By <strong>Juniors</strong>, for <strong>Juniors</strong>
      </h1>
      <article className="giants__content">
        <p className="hidden-small">
          Jeyser is the result of 5 years of work between M-Gate & N7 Consulting,
          both belonging to the France Junior-Entreprise top 30.
          Jeyser is rated with a platinum medal by SensioLabs, which certifies its quality
          (from a developer point of view).
          <br /><br />
          Here are a few points which seems important to us:
        </p>
        <HomeList data={data} className="giants__list" />
        <p className="hidden-small">
          Join the community now!
        </p>
      </article>
    </div>
  </section>
);

export default Giants;
