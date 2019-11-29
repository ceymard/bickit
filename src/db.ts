import * as Sqlite from 'better-sqlite3'

export const DATA_DIR = process.env.DATA_DIR ?? '/protected/data'
export const DB_PATH = DATA_DIR + '/db.sqlite'

export const db: Sqlite.Database = new Sqlite(DB_PATH)

db.pragma(`journal_mode = 'wal'`)

db.exec(/* sql */ `
  create table if not exists user (
    username text not null primary key, -- always an email
    name text not null default '',
    is_admin int default 0 -- one or zero
  )
`)

db.exec(/* sql */ `
  create table if not exists item (
    id text not null primary key, -- uuid of the object
    parent_id text references item(id), -- null for root folders
    type int, -- 0 if folder, 1 if file
    size int, -- file size if file, element count if folder.
    name text not null,
    description text not null default '',
    ctime int not null, -- as milliseconds since epoch in gmt
    atime int not null,
    mtime int not null,
    access_count int not null default 0
  )
`)

// Links between
db.exec(/* sql */ `
  create table if not exists user_item (
    username text not null references user(username),
    object text not null references object(id) -- only buckets !
  )
`)

export const enum ObjectType {
  Folder = 0,
  File
}

export interface Item {
  id: string
  parent_id: string | null
  type: ObjectType
  size: number

  name: string
  description: string
  ctime: number
  atime: number
  mtime: number
  access_count: number
}


export interface User {
  username: string
  name: string
  is_admin: number
}
