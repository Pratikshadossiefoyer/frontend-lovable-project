
import React, { useState } from 'react';
import { ApiKeyGeneration } from './ApiKeyGeneration';
import { KeywordFileUpload } from './KeywordFileUpload';
import { KeywordsTable } from './KeywordsTable';

export function KeywordRankingContent() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [isGeneratingKey, setIsGeneratingKey] = useState(false);
  const [apiKeyGenerated, setApiKeyGenerated] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleGenerateApiKey = () => {
    setIsGeneratingKey(true);
    // Simulate API key generation
    setTimeout(() => {
      setIsGeneratingKey(false);
      setApiKeyGenerated(true);
      setHasApiKey(true);
    }, 2000);
  };

  // Show API Key generation interface first
  if (!hasApiKey) {
    return (
      <ApiKeyGeneration
        isGeneratingKey={isGeneratingKey}
        apiKeyGenerated={apiKeyGenerated}
        onGenerateApiKey={handleGenerateApiKey}
      />
    );
  }

  // Show the main keyword ranking interface after API key is generated
  return (
    <div className="space-y-6">
      <KeywordFileUpload
        selectedFile={selectedFile}
        onFileUpload={handleFileUpload}
      />
      <KeywordsTable />
    </div>
  );
}
