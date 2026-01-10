import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { documentTypes } from '../../data/mockData';
import './Documents.scss';

const Documents = () => {
  const { documents, addDocument, deleteDocument } = useApp();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newDocument, setNewDocument] = useState({
    name: '',
    type: '',
    size: '',
    expiry: ''
  });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleUpload = (e) => {
    e.preventDefault();
    if (newDocument.name && newDocument.type) {
      addDocument(newDocument);
      setNewDocument({ name: '', type: '', size: '', expiry: '' });
      setShowUploadModal(false);
    }
  };

  const filteredDocuments = selectedCategory === 'All'
    ? documents
    : documents.filter(doc => doc.type === selectedCategory);

  const getDocumentIcon = (type) => {
    if (type.includes('Passport') || type.includes('ID')) return 'fa-id-card';
    if (type.includes('Academic') || type.includes('Transcript')) return 'fa-graduation-cap';
    if (type.includes('Test') || type.includes('Score')) return 'fa-file-alt';
    if (type.includes('Financial')) return 'fa-money-bill';
    if (type.includes('CV') || type.includes('Resume')) return 'fa-file-alt';
    return 'fa-file-pdf';
  };

  const isExpiring = (expiry) => {
    if (!expiry) return false;
    const daysUntilExpiry = Math.ceil((new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry > 0 && daysUntilExpiry <= 90;
  };

  const isExpired = (expiry) => {
    if (!expiry) return false;
    return new Date(expiry) < new Date();
  };

  return (
    <div className="documents-page">
      <div className="page-header">
        <div>
          <h1>Document Vault</h1>
          <p>{documents.length} documents stored securely</p>
        </div>
        <button onClick={() => setShowUploadModal(true)} className="upload-btn">
          <i className="fas fa-cloud-upload-alt"></i>
          Upload
        </button>
      </div>

      <div className="category-filters">
        <button
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          All ({documents.length})
        </button>
        {documentTypes.map((type) => {
          const count = documents.filter(doc => doc.type === type).length;
          return (
            <button
              key={type}
              className={selectedCategory === type ? 'active' : ''}
              onClick={() => setSelectedCategory(type)}
            >
              {type} ({count})
            </button>
          );
        })}
      </div>

      <div className="documents-grid">
        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="document-card">
            <div className="document-icon">
              <i className={`fas ${getDocumentIcon(doc.type)}`}></i>
            </div>

            <div className="document-info">
              <h3>{doc.name}</h3>
              <p className="doc-type">{doc.type}</p>
              <div className="doc-meta">
                <span>
                  <i className="fas fa-calendar"></i>
                  Uploaded {new Date(doc.uploadDate).toLocaleDateString()}
                </span>
                <span>
                  <i className="fas fa-file"></i>
                  {doc.size}
                </span>
              </div>

              {doc.expiry && (
                <div className={`expiry-badge ${isExpired(doc.expiry) ? 'expired' : isExpiring(doc.expiry) ? 'expiring' : 'valid'}`}>
                  {isExpired(doc.expiry)
                    ? '⚠️ Expired'
                    : isExpiring(doc.expiry)
                    ? `⏰ Expires ${new Date(doc.expiry).toLocaleDateString()}`
                    : `✓ Valid until ${new Date(doc.expiry).toLocaleDateString()}`
                  }
                </div>
              )}
            </div>

            <div className="document-actions">
              <button className="action-btn">
                <i className="fas fa-download"></i>
              </button>
              <button className="action-btn">
                <i className="fas fa-eye"></i>
              </button>
              <button className="action-btn">
                <i className="fas fa-share-alt"></i>
              </button>
              <button
                className="action-btn delete"
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this document?')) {
                    deleteDocument(doc.id);
                  }
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="empty-state">
          <i className="fas fa-folder-open"></i>
          <h3>No Documents Found</h3>
          <p>Upload your documents to get started</p>
          <button onClick={() => setShowUploadModal(true)} className="upload-empty-btn">
            <i className="fas fa-cloud-upload-alt"></i>
            Upload Document
          </button>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Upload Document</h2>
              <button onClick={() => setShowUploadModal(false)} className="close-btn">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <form onSubmit={handleUpload} className="upload-form">
              <div className="form-group">
                <label>Document Name *</label>
                <input
                  type="text"
                  placeholder="e.g., Passport_JohnDoe.pdf"
                  value={newDocument.name}
                  onChange={(e) => setNewDocument({ ...newDocument, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Document Type *</label>
                <select
                  value={newDocument.type}
                  onChange={(e) => setNewDocument({ ...newDocument, type: e.target.value })}
                  required
                >
                  <option value="">Select Type</option>
                  {documentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>File Size</label>
                <input
                  type="text"
                  placeholder="e.g., 2.5 MB"
                  value={newDocument.size}
                  onChange={(e) => setNewDocument({ ...newDocument, size: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Expiry Date (if applicable)</label>
                <input
                  type="date"
                  value={newDocument.expiry}
                  onChange={(e) => setNewDocument({ ...newDocument, expiry: e.target.value })}
                />
              </div>

              <div className="file-upload-area">
                <i className="fas fa-cloud-upload-alt"></i>
                <p>Drag and drop file here or click to browse</p>
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" />
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setShowUploadModal(false)} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <i className="fas fa-upload"></i>
                  Upload Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
