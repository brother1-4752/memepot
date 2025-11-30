import { useEffect } from "react";

interface TransactionStep {
  id: string;
  label: string;
  status: "pending" | "processing" | "completed" | "failed";
}

interface TransactionProgressModalProps {
  isOpen: boolean;
  steps: TransactionStep[];
  onClose?: () => void;
}

export default function TransactionProgressModal({ isOpen, steps, onClose }: TransactionProgressModalProps) {
  useEffect(() => {
    // Monitor processing steps for future enhancements
    steps.findIndex(step => step.status === "processing");
  }, [steps]);

  if (!isOpen) return null;

  const allCompleted = steps.every(step => step.status === "completed");
  const hasFailed = steps.some(step => step.status === "failed");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-gradient-to-br from-[#1a0a2e] to-[#0a0118] rounded-2xl border border-purple-500/30 shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
              allCompleted
                ? "bg-gradient-to-br from-green-600 to-emerald-600"
                : hasFailed
                  ? "bg-gradient-to-br from-red-600 to-pink-600"
                  : "bg-gradient-to-br from-purple-600 to-pink-600 animate-pulse"
            }`}
          >
            {allCompleted ? (
              <i className="ri-check-line text-white text-4xl"></i>
            ) : hasFailed ? (
              <i className="ri-close-line text-white text-4xl"></i>
            ) : (
              <i className="ri-loader-4-line text-white text-4xl animate-spin"></i>
            )}
          </div>
          <h2 className="text-2xl font-bold mb-2">
            {allCompleted ? "Transaction Complete!" : hasFailed ? "Transaction Failed" : "Processing Transaction"}
          </h2>
          <p className="text-gray-400 text-sm">
            {allCompleted
              ? "Your transaction has been successfully completed"
              : hasFailed
                ? "Something went wrong with your transaction"
                : "Please wait while we process your transaction"}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                step.status === "completed"
                  ? "bg-green-500/10 border-green-500/30"
                  : step.status === "processing"
                    ? "bg-purple-500/10 border-purple-500/40 animate-pulse"
                    : step.status === "failed"
                      ? "bg-red-500/10 border-red-500/30"
                      : "bg-[#0a0118]/60 border-purple-500/20"
              }`}
            >
              {/* Step Icon */}
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  step.status === "completed"
                    ? "bg-green-500/20"
                    : step.status === "processing"
                      ? "bg-purple-500/20"
                      : step.status === "failed"
                        ? "bg-red-500/20"
                        : "bg-gray-500/20"
                }`}
              >
                {step.status === "completed" ? (
                  <i className="ri-check-line text-green-400 text-xl"></i>
                ) : step.status === "processing" ? (
                  <i className="ri-loader-4-line text-purple-400 text-xl animate-spin"></i>
                ) : step.status === "failed" ? (
                  <i className="ri-close-line text-red-400 text-xl"></i>
                ) : (
                  <span className="text-gray-400 font-semibold">{index + 1}</span>
                )}
              </div>

              {/* Step Label */}
              <div className="flex-1">
                <p
                  className={`font-semibold ${
                    step.status === "completed"
                      ? "text-green-400"
                      : step.status === "processing"
                        ? "text-purple-400"
                        : step.status === "failed"
                          ? "text-red-400"
                          : "text-gray-400"
                  }`}
                >
                  {step.label}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {step.status === "completed"
                    ? "Completed"
                    : step.status === "processing"
                      ? "Processing..."
                      : step.status === "failed"
                        ? "Failed"
                        : "Waiting"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        {(allCompleted || hasFailed) && onClose && (
          <button
            onClick={onClose}
            className={`w-full py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              allCompleted
                ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90"
                : "bg-gradient-to-r from-red-600 to-pink-600 hover:opacity-90"
            }`}
          >
            {allCompleted ? "Done" : "Close"}
          </button>
        )}

        {/* Processing Message */}
        {!allCompleted && !hasFailed && (
          <div className="text-center">
            <p className="text-sm text-gray-400">Please confirm the transaction in your wallet</p>
          </div>
        )}
      </div>
    </div>
  );
}
