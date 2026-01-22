
import React, { useState } from 'react';
import { courses, algorithms } from './data/content';
import { Modal } from './components/Modal';
import { styles } from './styles';

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 className="logo" style={styles.logo}>IT Explorer</h1>
        <nav className="mainNav">
          <a href="#hero" className="navLink" style={styles.navLink}>Trang Chủ</a>
          <a href="#courses" className="navLink" style={styles.navLink}>Khóa Học</a>
          <a href="#about" className="navLink" style={styles.navLink}>Giới Thiệu</a>
          <a href="#contact" className="navLink" style={styles.navLink}>Liên Hệ</a>
        </nav>
      </header>

      <main style={styles.main}>
        <section id="hero" style={styles.hero}>
          <h2 className="heroTitle" style={styles.heroTitle}>Chinh Phục Thế Giới Số</h2>
          <p style={styles.heroSubtitle}>
            Bắt đầu hành trình của bạn với các khóa học tin học từ cơ bản đến nâng cao, được thiết kế cho tương lai.
          </p>
          <button className="ctaButton" style={styles.ctaButton}>Bắt Đầu Ngay</button>
        </section>

        <section id="courses" style={styles.coursesSection}>
          <h3 style={styles.sectionTitle}>Các Khóa Học Nổi Bật</h3>
          <div style={styles.coursesGrid}>
            {courses.map((course, index) => {
                if (course.youtubeId) {
                  return (
                    <div key={index} style={styles.videoCourseCard}>
                      <div style={styles.videoContainer}>
                        <iframe
                          style={styles.videoIframe}
                          src={`https://www.youtube.com/embed/${course.youtubeId}?rel=0`}
                          title={course.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div style={styles.cardContent}>
                         <h4 style={styles.videoCourseTitle}>{course.title}</h4>
                         {course.author && <p style={styles.videoCourseAuthor}>Tác giả: {course.author}</p>}
                         <p style={styles.videoCourseDescription}>{course.description}</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="courseCard" style={{...styles.courseCard, cursor: 'pointer'}} onClick={() => setSelectedItem(course)}>
                      <div style={styles.courseIcon}>{course.icon}</div>
                      <h4 style={styles.courseTitle}>{course.title}</h4>
                      <p style={styles.iconCardDescription}>{course.description}</p>
                    </div>
                  );
                }
              })}
          </div>
        </section>

        <section style={styles.algorithmsSection}>
          <h3 style={styles.sectionTitle}>Hướng Dẫn Thuật Toán</h3>
          <div style={styles.coursesGrid}>
            {algorithms.map((algo, index) => (
              <div key={index} className="courseCard" style={{...styles.courseCard, cursor: 'pointer'}} onClick={() => setSelectedItem(algo)}>
                <div style={styles.courseIcon}>{algo.icon}</div>
                <h4 style={styles.courseTitle}>{algo.title}</h4>
                <p style={styles.iconCardDescription}>{algo.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" style={styles.aboutSection}>
            <h3 style={styles.sectionTitle}>Về IT Explorer</h3>
            <p style={styles.aboutText}>
                IT Explorer là một nền tảng giáo dục trực tuyến dành riêng cho việc chia sẻ kiến thức về khoa học máy tính và lập trình. Sứ mệnh của chúng tôi là cung cấp các tài nguyên học tập chất lượng cao, dễ tiếp cận cho tất cả mọi người, từ những người mới bắt đầu cho đến các lập trình viên có kinh nghiệm muốn nâng cao kỹ năng. Chúng tôi tin rằng bất kỳ ai cũng có thể học lập trình và tạo ra những sản phẩm công nghệ tuyệt vời.
            </p>
        </section>

        <section id="contact" style={styles.contactSection}>
            <h3 style={styles.sectionTitle}>Liên Hệ Với Chúng Tôi</h3>
            <p style={styles.contactText}>
                Nếu bạn có bất kỳ câu hỏi, góp ý hoặc mong muốn hợp tác, đừng ngần ngại liên hệ với chúng tôi.
            </p>
            <div style={styles.contactInfo}>
                <p><strong>Email:</strong> <a href="mailto:contact@itexplorer.dev" style={styles.contactLink}>contact@itexplorer.dev</a></p>
                <p><strong>Theo dõi chúng tôi trên mạng xã hội:</strong> @ITExplorer</p>
            </div>
        </section>

      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} IT Explorer. All rights reserved.</p>
      </footer>
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};