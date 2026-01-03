"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Faq.module.css";

export default function FaqPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "차량 지원이 포함되어 있나요?",
            answer: "네, 병원동행 서비스에는 전용 차량 또는 택시비(실비)를 통한 이동 지원이 포함되어 있습니다. 상담 시 차량 종류를 선택하실 수 있습니다."
        },
        {
            question: "예약은 언제까지 해야 하나요?",
            answer: "원활한 배차를 위해 최소 3일 전 예약을 권장드립니다. 다만, 긴급한 경우 당일 예약 가능 여부를 고객센터로 확인해 주시기 바랍니다."
        },
        {
            question: "지방에 있는 병원도 동행이 가능한가요?",
            answer: "네, 수도권뿐만 아니라 전국 어디든 서비스 신청이 가능합니다. 장거리 동행의 경우 별도의 운임이 발생할 수 있습니다."
        },
        {
            question: "매니저님은 어떤 분들인가요?",
            answer: "성심동행케어(주)의 매니저는 모두 간호사, 사회복지사, 요양보호사 등 국가 전문 자격증을 소지하고 계신 검증된 전문가들입니다."
        },
        {
            question: "결제는 어떻게 하나요?",
            answer: "서비스 완료 후 카드 결제 또는 계좌이체가 가능하며, 정기 이용 고객님을 위한 선결제 할인 혜택도 준비되어 있습니다."
        }
    ];

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold color-white" style={{ color: 'white', fontWeight: 'bold' }}>자주하는 질문</h2>
                    <p style={{ color: 'white' }}>Frequently Asked Questions</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.faqContainer}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <button
                                    className={`${styles.faqQuestion} ${activeIndex === index ? styles.faqQuestionActive : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h4>Q. {faq.question}</h4>
                                    <i className="fas fa-chevron-down"></i>
                                </button>
                                {activeIndex === index && (
                                    <div className={styles.faqAnswer}>
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
