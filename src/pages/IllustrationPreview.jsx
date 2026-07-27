/**
 * IllustrationPreview — Temporary page to preview all SVG illustrations at a glance.
 * Import this into App.jsx temporarily to see every illustration rendered on a single page.
 */
import {
  ChildWithLightbulb,
  ChildOnPencil,
  ChildReading,
  ChildPeeking,
  RulerTriangle,
  FloatingCube,
  FloatingHexagon,
  LocationPin,
  BookStack,
  SpeechBubbleCharacter,
  MathSymbols,
  EnglishCourse,
  BookLibraryIcon,
  ParentToddlerIcon,
  MathProgramIcon,
  ReadingProgramIcon,
  EnglishProgramIcon,
  GrowthIcon,
  CurriculumIcon,
  RocketIcon,
  LightbulbIcon,
  PaletteIcon,
} from '../assets/illustrations';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 20, fontWeight: 700, color: '#1B1F3B', marginBottom: 16 }}>
      {title}
    </h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'end', background: '#F7F9FC', borderRadius: 16, padding: 24 }}>
      {children}
    </div>
  </div>
);

const Label = ({ children }) => (
  <p style={{ fontSize: 11, color: '#6B7280', marginTop: 8, textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
    {children}
  </p>
);

export default function IllustrationPreview() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 28, fontWeight: 800, color: '#1B1F3B', marginBottom: 32 }}>
        🎨 Illustration Library Preview
      </h1>

      <Section title="Hero Character Illustrations">
        <div style={{ textAlign: 'center' }}>
          <ChildWithLightbulb width={260} height={290} />
          <Label>ChildWithLightbulb</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ChildOnPencil width={220} height={270} />
          <Label>ChildOnPencil</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ChildReading width={180} height={230} />
          <Label>ChildReading</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ChildPeeking width={120} height={140} />
          <Label>ChildPeeking</Label>
        </div>
      </Section>

      <Section title="Decorative Objects">
        <div style={{ textAlign: 'center' }}>
          <RulerTriangle width={150} height={150} />
          <Label>RulerTriangle</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <FloatingCube width={60} height={70} />
          <Label>FloatingCube</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <FloatingHexagon width={40} height={44} />
          <Label>FloatingHexagon</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <LocationPin width={32} height={44} />
          <Label>LocationPin</Label>
        </div>
      </Section>

      <Section title="Service Card Illustrations">
        <div style={{ textAlign: 'center' }}>
          <MathSymbols width={90} height={90} />
          <Label>MathSymbols</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <SpeechBubbleCharacter width={90} height={90} />
          <Label>SpeechBubbleCharacter</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BookStack width={80} height={80} />
          <Label>BookStack</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <EnglishCourse width={90} height={80} />
          <Label>EnglishCourse</Label>
        </div>
      </Section>

      <Section title="Program Card Icons">
        <div style={{ textAlign: 'center' }}>
          <BookLibraryIcon size={48} />
          <Label>BookLibraryIcon</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ParentToddlerIcon size={48} />
          <Label>ParentToddlerIcon</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <MathProgramIcon size={48} />
          <Label>MathProgramIcon</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ReadingProgramIcon size={48} />
          <Label>ReadingProgramIcon</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <EnglishProgramIcon size={48} />
          <Label>EnglishProgramIcon</Label>
        </div>
      </Section>

      <Section title="Mission Feature Icons">
        <div style={{ textAlign: 'center' }}>
          <GrowthIcon size={48} />
          <Label>GrowthIcon</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <CurriculumIcon size={48} />
          <Label>CurriculumIcon</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <RocketIcon size={48} />
          <Label>RocketIcon</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <LightbulbIcon size={48} />
          <Label>LightbulbIcon</Label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <PaletteIcon size={48} />
          <Label>PaletteIcon</Label>
        </div>
      </Section>
    </div>
  );
}
