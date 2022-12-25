import './App.css';
import TeacherSection from './components/TeacherSection';
import TitleSection from './components/TitleSection';
import ValueSection from './components/ValueSection';
import StudentSection from './components/StudentSection';
import QuestionSection from './components/QuestionSection';
import TrialSection from './components/TrialSection';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <TitleSection />
      <ValueSection />
      <TeacherSection />
      <StudentSection />
      <QuestionSection />
      <TrialSection />
      <Footer />

    </div>
  );
}

export default App;
