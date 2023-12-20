import { Doctor } from "../interface/Doctors";
import doc1 from '../assets/images/doc1.jpg';
import doc2 from '../assets/images/doc2.jpg';
import doc3 from '../assets/images/doc3.jpg';
import doc4 from '../assets/images/doc4.jpg';
import doc5 from '../assets/images/doc5.jpg';

export const DoctorsData: Doctor[] = [
    {
        id: 1,
        img: doc1,
        name: 'Dr. John Doe',
        specialties: 'Cardiology'
    },
    {
        id: 2,
        img: doc2,
        name: 'Dr. Jane Smith',
        specialties: 'Pediatrics',
    },
    {
        id: 3,
        img: doc3,
        name: 'Dr. Michael Johnson',
        specialties: 'Orthopedics',
    },
    {
        id: 4,
        img: doc4,
        name: 'Dr. Emily White',
        specialties: 'Dermatology',
    },
    {
        id: 5,
        img: doc5,
        name: 'Dr. William Brown',
        specialties: 'Retina Specialist',
    },
];
