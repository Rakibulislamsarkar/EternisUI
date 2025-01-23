"use client"

import * as React from "react"
import { Plus, Upload, Palette, Share2, BookMarked, StickyNote } from "lucide-react"
import {
  FloatingActionPanelRoot,
  FloatingActionPanelTrigger,
  FloatingActionPanelContent,
  FloatingActionPanelButton,
  FloatingActionPanelForm,
  FloatingActionPanelTextarea,
} from "@/app/examples/panel/components/floating-action-panel"

export default function FloatingPanelDemo() {
  const handleNoteSubmit = React.useCallback((note: string) => {
    console.log("Note submitted:", note)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4 dark:bg-zinc-900">
      <FloatingActionPanelRoot>
        {(context) => (
          <div className="flex  flex-col items-center justify-center gap-4 rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-950">
            <FloatingActionPanelTrigger title="Actions" mode="actions">
              <Plus className="mr-2 h-4 w-4" />
              Add New
            </FloatingActionPanelTrigger>

            <FloatingActionPanelTrigger title="Add Note" mode="note">
              <StickyNote className="mr-2 h-4 w-4" />
              Add Note
            </FloatingActionPanelTrigger>

            <FloatingActionPanelContent>
              {context.mode === "actions" ? (
                <div className="space-y-1 p-1">
                  <FloatingActionPanelButton>
                    <Upload className="h-4 w-4" />
                    Upload File
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton>
                    <Palette className="h-4 w-4" />
                    Customize
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton>
                    <Share2 className="h-4 w-4" />
                    Share
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton>
                    <BookMarked className="h-4 w-4" />
                    Save
                  </FloatingActionPanelButton>
                </div>
              ) : (
                <FloatingActionPanelForm onSubmit={handleNoteSubmit}>
                  <FloatingActionPanelTextarea className="min-h-[100px]" />
                  <div className="flex justify-end gap-2 border-t p-2">
                    <button
                      type="button"
                      onClick={context.closePanel}
                      className="rounded-md px-3 py-1.5 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                      Save
                    </button>
                  </div>
                </FloatingActionPanelForm>
              )}
            </FloatingActionPanelContent>
          </div>
        )}
      </FloatingActionPanelRoot>
    </div>
  )
}

