import { Training } from "../models/training";
import { encryptSha256 } from "../utils/encryptSha256";

export class TrainingRepository {
  constructor() {}

  /**
   * ポストの作成
   * @param training トレーニング
   * @returns 作成された
   */
  async save(
    trainingName: string,
    weight: number,
    reps: number,
    set: number,
    date: Date,
  ) {
    const response = await fetch(`/api/training/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({trainingName, weight, reps, set, date:"1970-01-01T00:00:00.000Z"}),
    })

    const data = await response.json();

    return new Training(data.id, data.userId, data.trainingName, data.weight, data.reps, data.set, data.date)
  }

  /**
   * すべてのトレーニングを取得する
   * @returns ポスト一覧
   */
  async getByUserId(email: string) {
    const response = await fetch(`/api/training/${encryptSha256(email)}`);

    if (response.ok) {
      const data = await response.json() as Array<any>

      // TODO: デコーダ
      return data.map(element => {
        return new Training(element.id, element.userId, element.trainingName, element.weight, element.reps, element.set, element.date)
      });
    } else {
      return [];
    }
  }
}