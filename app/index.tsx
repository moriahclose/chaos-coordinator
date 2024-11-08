import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

type FamilyDetailsProps = {
    familyName: string
    familyId: string
}

const FamilyDetails: React.FC<FamilyDetailsProps> = ({
    familyName,
    familyId,
}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.familyHeader}>
                <Text style={styles.familyName}>{familyName}</Text>
                <Text style={styles.familyId}>Family ID: {familyId}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    familyHeader: {
        marginBottom: 20,
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    familyName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    familyId: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    membersContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    membersTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    memberContainer: {
        marginBottom: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    memberName: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    },
    memberId: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
})

export default function Index() {
    const [families, setFamilies] = useState<FamilyDetailsProps[]>([])

    useEffect(() => {
        const getFamilies = async () => {
            const familiesCollection = collection(db, 'families')
            const querySnapshot = await getDocs(familiesCollection)
            const familiesData = querySnapshot.docs.map((doc) => ({
                familyId: doc.id,
                familyName: doc.data().name,
            }))
            setFamilies(familiesData)
        }
        getFamilies()
    }, [])

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Families</Text>
            {families.map((family) => (
                <FamilyDetails key={family.familyId} {...family} />
            ))}
        </View>
    )
}
