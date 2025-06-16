
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RefreshCw, Key, CheckCircle2 } from "lucide-react";

interface ApiKeyGenerationProps {
  isGeneratingKey: boolean;
  apiKeyGenerated: boolean;
  onGenerateApiKey: () => void;
}

export function ApiKeyGeneration({ isGeneratingKey, apiKeyGenerated, onGenerateApiKey }: ApiKeyGenerationProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end">
        <Button 
          onClick={onGenerateApiKey}
          disabled={isGeneratingKey}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 px-8"
        >
          {isGeneratingKey ? (
            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Key className="w-4 h-4 mr-2" />
          )}
          {isGeneratingKey ? 'Generating...' : 'Generate API Key'}
        </Button>
      </div>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50 min-h-[400px] flex items-center justify-center">
        <CardContent className="text-center space-y-6 p-12">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
            <Key className="w-10 h-10 text-white" />
          </div>
          
          <div className="space-y-3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Generate API Key
            </h2>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              Click the button below to generate your Google Custom Search API key to start searching.
            </p>
          </div>

          <Button 
            onClick={onGenerateApiKey}
            disabled={isGeneratingKey}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 px-10 py-6 text-lg font-semibold"
          >
            {isGeneratingKey ? (
              <>
                <RefreshCw className="w-5 h-5 mr-3 animate-spin" />
                Generating API Key...
              </>
            ) : (
              <>
                <Key className="w-5 h-5 mr-3" />
                Generate API Key
              </>
            )}
          </Button>

          {apiKeyGenerated && (
            <Alert className="max-w-md mx-auto bg-emerald-50 border-emerald-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <AlertDescription className="text-emerald-700">
                API Key generated successfully! Loading keyword tracker...
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
