
import React, { useState } from "react";
import faqData from "../data/faq.json";
import "../styles/FAQ.css";

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Categories are generated from JSON data
  const categories = [
    "All",
    ...new Set(faqData.map((item) => item.category)),
  ];

  // Filter questions using the selected category
  const filteredFAQs =
    activeCategory === "All"
      ? faqData
      : faqData.filter(
          (item) => item.category === activeCategory
        );

  // Open or close an FAQ
  const toggleFAQ = (question) => {
    setActiveQuestion((current) =>
      current === question ? null : question
    );
  };

  return (
    <section className="ks-faq" id="faq">
      <div className="ks-faq-container">

        {/* Heading */}
        <header className="ks-faq-heading">
          <span className="ks-faq-label">
            <span className="ks-faq-label-dot" />
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Got Questions?
            <span> We Have Answers.</span>
          </h2>

          <p>
            Everything you need to know about our services,
            digital solutions, and projects.
          </p>
        </header>

        {/* Category Filters */}
        <div
          className="ks-faq-filters"
          role="group"
          aria-label="Filter questions by category"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`ks-faq-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(category);
                setActiveQuestion(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="ks-faq-list">
          {filteredFAQs.map((item, index) => {
            const isOpen =
              activeQuestion === item.id;

            const answerId = `ks-faq-answer-${item.id}`;

            return (
              <article
                className={`ks-faq-item ${
                  isOpen ? "is-open" : ""
                }`}
                key={item.id}
              >
                <button
                  type="button"
                  className="ks-faq-question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span className="ks-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="ks-faq-question-text">
                    {item.question}
                  </span>

                  <span
                    className="ks-faq-icon"
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                  </span>
                </button>

                <div
                  className="ks-faq-answer-wrap"
                  id={answerId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="ks-faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="ks-faq-cta">
          <div className="ks-faq-cta-text">
            <span className="ks-faq-cta-small">
              NEED MORE INFORMATION?
            </span>

            <h3>Let’s talk about your ideas.</h3>

            <p>
              Our team is ready to help with your business
              requirements and digital solutions.
            </p>
          </div>

          <a
            className="ks-faq-cta-button"
            href="https://wa.me/918807754570"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact KSquare Softtech on WhatsApp"
          >
            Chat with Us
            <span aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default FAQ;
