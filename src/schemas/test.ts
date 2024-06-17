import { Static, TSchema } from '@sinclair/typebox'
import { Remove, SRLKey } from '../utils/item'
import { MutuallyAssignable } from '../utils/test'

export type SchemaToMatch<A extends TSchema, B> = MutuallyAssignable<Static<A>, B>

export type PartialDatabaseSchemaToMatch<A extends TSchema, B> = SchemaToMatch<
    A,
    Remove<B, SRLKey<B>>
>
