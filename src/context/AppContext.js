import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // User Profile State
  const [userProfile, setUserProfile] = useState({
    name: 'Guest User',
    email: '',
    phone: '',
    education: {
      level: '',
      gpa: '',
      institution: '',
      yearOfPassing: ''
    },
    testScores: {
      ielts: '',
      toefl: '',
      gre: '',
      gmat: ''
    },
    preferences: {
      countries: [],
      programs: [],
      budget: ''
    },
    profileStrength: 0
  });

  // Applications State
  const [applications, setApplications] = useState([
    {
      id: 1,
      universityId: 1,
      universityName: "University of Toronto",
      program: "Computer Science",
      status: "Under Review",
      appliedDate: "2025-12-15",
      deadline: "2026-02-01",
      progress: 75,
      documents: [
        { name: "Transcripts", uploaded: true },
        { name: "IELTS Score", uploaded: true },
        { name: "SOP", uploaded: true },
        { name: "LOR", uploaded: false }
      ]
    },
    {
      id: 2,
      universityId: 5,
      universityName: "National University of Singapore",
      program: "Artificial Intelligence",
      status: "Documents Required",
      appliedDate: "2025-12-20",
      deadline: "2026-03-15",
      progress: 50,
      documents: [
        { name: "Transcripts", uploaded: true },
        { name: "TOEFL Score", uploaded: false },
        { name: "SOP", uploaded: true },
        { name: "LOR", uploaded: false }
      ]
    }
  ]);

  // Documents State
  const [documents, setDocuments] = useState([
    { id: 1, name: "Passport.pdf", type: "Passport", uploadDate: "2025-11-10", size: "2.3 MB", expiry: "2030-05-15" },
    { id: 2, name: "Transcripts.pdf", type: "Academic Transcripts", uploadDate: "2025-11-15", size: "1.8 MB", expiry: null },
    { id: 3, name: "IELTS_Score.pdf", type: "Test Scores (IELTS/TOEFL)", uploadDate: "2025-11-20", size: "0.5 MB", expiry: "2027-11-20" },
  ]);

  // Favorites/Saved Universities
  const [favorites, setFavorites] = useState([1, 5]);

  // Comparison List
  const [comparisonList, setComparisonList] = useState([]);

  // Messages/Notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Application Update",
      message: "Your application to University of Toronto is now under review",
      date: "2025-12-28",
      read: false
    },
    {
      id: 2,
      title: "Document Required",
      message: "Please upload your LOR for NUS application",
      date: "2025-12-25",
      read: false
    }
  ]);

  // Add to favorites
  const toggleFavorite = (universityId) => {
    setFavorites(prev =>
      prev.includes(universityId)
        ? prev.filter(id => id !== universityId)
        : [...prev, universityId]
    );
  };

  // Add to comparison
  const toggleComparison = (universityId) => {
    if (comparisonList.includes(universityId)) {
      setComparisonList(prev => prev.filter(id => id !== universityId));
    } else if (comparisonList.length < 4) {
      setComparisonList(prev => [...prev, universityId]);
    } else {
      alert('You can compare up to 4 universities only');
    }
  };

  // Add document
  const addDocument = (document) => {
    setDocuments(prev => [...prev, { ...document, id: Date.now(), uploadDate: new Date().toISOString().split('T')[0] }]);
  };

  // Delete document
  const deleteDocument = (docId) => {
    setDocuments(prev => prev.filter(doc => doc.id !== docId));
  };

  // Mark notification as read
  const markNotificationRead = (notificationId) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  // Update application status
  const updateApplicationStatus = (appId, newStatus) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === appId ? { ...app, status: newStatus } : app
      )
    );
  };

  const value = {
    userProfile,
    setUserProfile,
    applications,
    setApplications,
    documents,
    setDocuments,
    favorites,
    toggleFavorite,
    comparisonList,
    toggleComparison,
    notifications,
    markNotificationRead,
    addDocument,
    deleteDocument,
    updateApplicationStatus
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
