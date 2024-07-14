import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="" description="">
    <VerticalFeatureRow
      title="Fasilitas Terbaik"
      description="Nikmati berbagai fasilitas modern yang mendukung kegiatan belajarmu dan aktivitas sehari-hari."
      image="/assets/images/S__8404996.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Biaya Terjangkau"
      description="Temukan tempat tinggal dengan biaya yang sesuai dengan anggaran mahasiswa tanpa mengorbankan kenyamanan."
      image="/assets/images/S__8404998.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Komunitas Aktif"
      description="Bergabunglah dengan komunitas mahasiswa yang dinamis dan dapatkan teman-teman baru dari berbagai jurusan dan universitas."
      image="/assets/images/S__8405021.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
