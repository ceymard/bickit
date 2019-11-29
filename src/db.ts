import S from 'better-sqlite3'

const sql_user = /* sql */ `
  create table user (
    username text not null primary key, -- always an email
    name text not null default '',
    is_admin int default 0 -- one or zero
  )
`

export const enum ObjectType {
  Folder = 0,
  File
}


export interface Item {

}


//
const sql_item = /* sql */ `
  create table item (
    id text not null primary key, -- uuid of the object
    parent_id text references item(id), -- null for root folders
    type int, -- 0 if folder, 1 if file
    size int, -- file size if file, element count if folder.
    name text not null,
    description text not null default '',
    ctime int not null, -- as milliseconds since epoch in gmt
    atime int not null,
    mtime int not null,
    access_nb int not null default 0
  )
`

// Links between
const sql_user_link = /* sql */ `
  create table user_object (
    username text not null references user(username),
    object text not null references object(id) -- only buckets !
  )
`

export interface User {
  username: string
  name: string
  is_admin: number
}

