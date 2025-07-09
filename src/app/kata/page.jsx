import {KataMutiara} from '@/components/greeting'

export default function KataPage() {
	const namaUser = "Faizul"
	return (
		<div>
			<KataMutiara nama={namaUser} asal={"Sumbawa"}/>
		</div>
	)
}