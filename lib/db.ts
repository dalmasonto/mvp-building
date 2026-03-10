import Dexie, { type EntityTable } from 'dexie';

interface Progress {
    id: string; // Key: module_id_lesson_id
    moduleId: number;
    lessonId: number;
    moduleTitle: string;
    lessonTitle: string;
    content: string;
    updatedAt: number;
}

const db = new Dexie('BuilderMasterclassDB') as Dexie & {
    progress: EntityTable<
        Progress,
        'id' // primary key "id" (for the type-safety)
    >;
};

// Schema declaration:
db.version(1).stores({
    progress: 'id, moduleId, lessonId, updatedAt' // primary key and indexed fields
});

export type { Progress };
export { db };
